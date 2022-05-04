﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Hosting;

namespace Asm.AmCom.Web.TagHelpers;

public abstract class IntegrityTagHelper : TagHelper
{
    [ViewContext]
    public ViewContext ViewContext { get; set; }

    protected IUrlHelper UrlHelper { get; }
    protected IWebHostEnvironment HostingEnvironment { get; }
    protected IMemoryCache MemoryCache { get; }

    protected abstract string UrlSourceAttributeName { get; }

    protected abstract string UrlOutputAttributeName { get; }

    public IntegrityTagHelper(IActionContextAccessor actionContextAccessor, IUrlHelperFactory urlHelperFactory, IWebHostEnvironment hostingEnvironment, IMemoryCache memoryCache)
    {
        UrlHelper = urlHelperFactory.GetUrlHelper(actionContextAccessor.ActionContext);
        HostingEnvironment = hostingEnvironment;
        MemoryCache = memoryCache;
    }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        var url = context.AllAttributes[UrlSourceAttributeName]?.Value as string;

        if (String.IsNullOrEmpty(url)) return;

        if (!HostingEnvironment.IsDevelopment() && MemoryCache.TryGetValue(url, out (string Url, string Hash) data))
        {
            output.Attributes.RemoveAll(UrlSourceAttributeName);
            output.Attributes.RemoveAll(UrlOutputAttributeName);
            output.Attributes.Add(UrlOutputAttributeName, data.Url);
            output.Attributes.Add("integrity", data.Hash);
            return;
        }

        string cleanPath = url.Replace('~', '.');
        cleanPath = cleanPath[..(cleanPath.IndexOf("?") > 0 ? cleanPath.IndexOf("?") : cleanPath.Length)];
        cleanPath = cleanPath.Replace('/', Path.DirectorySeparatorChar);

        string path = Path.Combine(HostingEnvironment.WebRootPath, cleanPath);

        if (!File.Exists(path)) return;

        var hashAlgo = System.Security.Cryptography.HashAlgorithm.Create("SHA-512");

        using FileStream file = File.OpenRead(path);
        byte[] hash = hashAlgo.ComputeHash(file);

        string hashBase64 = "sha512-" + Convert.ToBase64String(hash);
        string calculatedUrl = UrlHelper.Content(url.Replace("$v", Math.Abs(hashBase64.GetHashCode()).ToString()));

        MemoryCache.Set(url, (calculatedUrl, hashBase64));

        output.Attributes.RemoveAll(UrlSourceAttributeName);
        output.Attributes.RemoveAll(UrlOutputAttributeName);

        output.Attributes.Add(UrlOutputAttributeName, calculatedUrl);
        output.Attributes.Add("integrity", hashBase64);
    }
}
