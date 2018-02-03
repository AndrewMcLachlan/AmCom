using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Asm.AmCom.Web.Sitemap
{
    [XmlType(AnonymousType = true, Namespace = Namespace)]
    [XmlRoot(ElementName = "siteMap", Namespace = Namespace)]
    public class SiteMap
    {
        public const string Namespace = "https://andrewmclachlan.com/schemas/SiteMap.xsd";

        [XmlElement("siteMapNode", Namespace = Namespace)]
        public List<SiteMapNode> Nodes { get; set; }
    }
}
