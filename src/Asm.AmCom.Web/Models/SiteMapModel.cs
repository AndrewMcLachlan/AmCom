using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml.Linq;
using Asm.AmCom.Web.Sitemap;
using Asm.IO;

namespace Asm.AmCom.Web.Models
{
    public class SiteMapModel
    {
        private ViewHelper _viewHelper;

        public ICollection<SiteMapModelNode> Nodes { get; set; }

        public SiteMapModel(ViewHelper viewHelper, string siteMapFile)
        {
            _viewHelper = viewHelper;

            Nodes = new List<SiteMapModelNode>();

            SiteMapProvider provider = new SiteMapProvider(siteMapFile);

            ProcessNodes(provider.SiteMap.Nodes, Nodes, 1);
        }

        private void ProcessNodes(IEnumerable<SiteMapNode> nodes, ICollection<SiteMapModelNode> ul, int recursionLevel)
        {
            foreach (SiteMapNode node in nodes)
            {
                if (!String.IsNullOrWhiteSpace(node.Title))
                {
                    float? priority = null;
                    if (node.PrioritySpecified)
                    {
                        priority = node.Priority;
                    }


                    SiteMapModelNode modelNode = new SiteMapModelNode
                    {
                        Controller = node.Controller,
                        Action = node.Action,
                        Area = node.Area,
                        Url = node.Url,
                        Title = node.Title,
                        Priority = priority,
                    };

                    if (node.Nodes != null && node.Nodes.Any())
                    {
                        ProcessNodes(node.Nodes, modelNode.Nodes, recursionLevel + 1);
                    }

                    ul.Add(modelNode);
                }
            }
        }


        public string ToXml()
        {
            XNamespace xmlns = "http://www.sitemaps.org/schemas/sitemap/0.9";

            XDocument doc = new XDocument(new XDeclaration("1.0", "UTF-8", "yes"));

            XNamespace xsi = "http://www.w3.org/2001/XMLSchema-instance";

            XElement root = new XElement(xmlns + "urlset",
                new XAttribute(XNamespace.Xmlns + "xsi", "http://www.w3.org/2001/XMLSchema-instance"),
                new XAttribute(xsi + "schemaLocation", "http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd")
            );

            AddNodes(Nodes, xmlns, root);

            doc.Add(root);

            using (TextWriter writer = new StringWriterWithEncoding(Encoding.UTF8))
            {
                doc.Save(writer);
                return writer.ToString();
            }


        }

        private void AddNodes(ICollection<SiteMapModelNode> Nodes, XNamespace xmlNamespace, XElement element)
        {
            foreach (SiteMapModelNode node in Nodes)
            {
                string url = $"{ _viewHelper.Context.HttpContext.Request.Scheme}://{_viewHelper.Context.HttpContext.Request.Host}{_viewHelper.UrlHelper.Content(node.Url)}";

                //string lastMod = GetLastMod(node.Controller, node.Action, node.Area);
                string lastMod = GetLastMod(url);
                /*if (String.IsNullOrEmpty(lastMod))
                {
                    lastMod = DateTime.UtcNow.AddMonths(-1).ToString("o");
                }*/

                element.Add(new XElement(xmlNamespace + "url",
                    new XElement(xmlNamespace + "loc", url),
                    !String.IsNullOrWhiteSpace(lastMod) ? new XElement(xmlNamespace + "lastmod", lastMod) : null,
                    new XElement(xmlNamespace + "changefreq", "monthly"),
                    node.Priority != null ? new XElement(xmlNamespace + "priority", node.Priority.Value.ToString("0.0")) : null
                    ));

                AddNodes(node.Nodes, xmlNamespace, element);
            }
        }

        private string GetLastMod(string url)
        {
            string path = _viewHelper.GetPhysicalPath(url).Result;

            if (!String.IsNullOrEmpty(path) && File.Exists(path))
            {
                return File.GetLastWriteTimeUtc(path).ToString("o");
            }

            return null;
        }

        private string GetLastMod(string controller, string action, string area)
        {
            string path = _viewHelper.GetPhysicalPath(controller, action, area);

            if (!String.IsNullOrEmpty(path) && File.Exists(path))
            {
                return File.GetLastWriteTimeUtc(path).ToString("o");
            }

            return null;
        }
    }

    public class SiteMapModelNode
    {
        public string Title { get; set; }

        public string Url { get; set; }

        public float? Priority { get; set; }

        public string CssClass { get; set; }
        public ICollection<SiteMapModelNode> Nodes { get; set; }

        public string Controller { get; set; }

        public string Action { get; set; }

        public string Area { get; set; }

        public SiteMapModelNode()
        {
            Nodes = new List<SiteMapModelNode>();
        }
    }


}