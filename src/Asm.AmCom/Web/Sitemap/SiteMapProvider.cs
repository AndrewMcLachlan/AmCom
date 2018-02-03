using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Serialization;
using Microsoft.AspNetCore.Routing;

namespace Asm.AmCom.Web.Sitemap
{
    public class SiteMapProvider
    {
        public SiteMapNode CurrentNode { get; private set; }

        public SiteMap SiteMap { get; private set; }

        public SiteMapProvider(string siteMapFile)
        {
            XmlSerializer serializer = new XmlSerializer(typeof(SiteMap));

            DirectoryInfo info = new DirectoryInfo(".");



            using (var reader = XmlReader.Create(File.Open(siteMapFile, FileMode.Open, FileAccess.Read, FileShare.ReadWrite)))
            {
                SiteMap = serializer.Deserialize(reader) as SiteMap;
            }

            if (SiteMap == null)
            {
                throw new InvalidOperationException("Not a valid site map file");
            }

            foreach (var node in SiteMap.Nodes)
            {
                SetParent(node);
            }

           /* var routeData = RouteTable.Routes.GetRouteData(new HttpContextWrapper(HttpContext.Current));
            RouteValueDictionary currentValues = routeData.Values;


            if (currentValues.Keys.Contains("MS_DirectRouteMatches"))
            {
                currentValues = ((List<RouteData>)currentValues["MS_DirectRouteMatches"]).First().Values;
            }

            foreach (SiteMapNode child in rootNode.ChildNodes)
            {
                MenuItem item = new MenuItem { Name = child.Title, Url = child.Url };

                RouteValueDictionary values = RouteTable.Routes.GetRouteData(GetFullyQualifiedUrl(child.Url)).Values;

                if (values.Keys.Contains("MS_DirectRouteMatches"))
                {
                    values = ((List<RouteData>)values["MS_DirectRouteMatches"]).First().Values;
                }

                item.Selected = child == CurrentSiteMap.CurrentNode || (currentValues["controller"].Equals(values["controller"]) && currentValues["action"].Equals(values["action"])) || HasSelectedChild(child, currentValues);

                item.Highlighted = child["custom"] == "highlight";

                if (!"false".Equals(child["visible"], StringComparison.OrdinalIgnoreCase))
                {
                    Items.Add(item);
                }
            }*/
        }

        public SiteMapNode FindSiteMapNode(SiteMapNode node)
        {
            return FindSiteMapNode(node, SiteMap.Nodes);
        }

        private SiteMapNode FindSiteMapNode(SiteMapNode node, IEnumerable<SiteMapNode> nodes)
        {
            var foundNode = nodes.Where(n => n == node).SingleOrDefault();

            if (foundNode == null)
            {
                foreach (var child in nodes)
                {
                    foundNode = FindSiteMapNode(node, child.Nodes);
                    if (foundNode != null) return foundNode;
                }
            }

            return foundNode;
        }

        private void SetParent(SiteMapNode node, SiteMapNode parent = null, int level = 1)
        {
            node.ParentNode = parent;
            node.Level = level;

            foreach(var childNode in node.Nodes)
            {
                SetParent(childNode, node, level+1);
            }
        }
    }
}
