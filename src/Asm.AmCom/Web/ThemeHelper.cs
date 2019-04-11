﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace Asm.AmCom.Web
{
    public class ThemeHelper
    {
        private List<string> Themes { get; }

        private HttpContext Context { get; }

        public string CurrentTheme
        {
            get
            {
                return Context.Request.Cookies.ContainsKey("theme") ? Themes.SingleOrDefault(t => t == Context.Request.Cookies["theme"]) : Themes.FirstOrDefault();
            }
        }

        public string OtherTheme
        {
            get
            {
                return Themes.Where(t => t != CurrentTheme).FirstOrDefault();
            }
        }

        public ThemeHelper(IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
        {
            Context = httpContextAccessor.HttpContext;
            Themes = configuration.GetSection("Themes").GetChildren().Select(t => t.Value).ToList();
        }

    }
}