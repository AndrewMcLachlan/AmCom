using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asm.AmCom.Web.Sitemap;

namespace Asm.AmCom.Web.Models
{
    public class MenuModel
    {
        #region Fields
        private SiteMapNode _currentNode;
        #endregion

        #region Properties
        /// <summary>
        /// The menu items.
        /// </summary>
        public List<MenuItem> Items { get; set; }

        /// <summary>
        /// The site map provider.
        /// </summary>
        public SiteMapProvider CurrentSiteMap
        {
            get;
            private set;
        }

        /// <summary>
        /// The CSS class name to apply to list items.
        /// </summary>
        public string ListItemClass { get; set; }

        /// <summary>
        /// The CSS class name to apply to anchor tags.
        /// </summary>
        public string AnchorClass { get; set; }
        #endregion

        #region Constructors
        /// <summary>
        /// Initializes a new instance of the <see cref="MenuModel"/> class, using the default site map provider.
        /// </summary>
        public MenuModel(SiteMapNode currentNode) : this(currentNode, 1)
        {
        }

        /// <summary>
        /// Inializes a new instance of the <see cref="MenuModel"/> class, using the default site map provider.
        /// </summary>
        /// <param name="level">The level to start at.</param>
        public MenuModel(SiteMapNode currentNode, int level) : this("Web.SiteMap", level, currentNode)
        {
        }

        /// <summary>
        /// Inializes a new instance of the <see cref="MenuModel"/> class.
        /// </summary>
        /// <param name="siteMapProvider">The name of the site map provider to use.</param>
        /// <param name="level">The level to start at.</param>
        public MenuModel(string siteMap, int level, SiteMapNode currentNode)
        {
            _currentNode = currentNode;
            CurrentSiteMap = new SiteMapProvider(siteMap);

            Items = new List<MenuItem>();

            switch (level)
            {
                case 1:
                    BuildModel(CurrentSiteMap.SiteMap.Nodes);
                    break;
                default:
                    SiteMapNode node = CurrentSiteMap.FindSiteMapNode(currentNode);
                    /*if (node == null)
                    {
                        node = CurrentSiteMap.FindSiteMapNode(HttpContext.Current.Request.Url.PathAndQuery.TrimEnd('/'));
                    }*/
                    if (node == null)
                    {
                        return;
                    }

                    while (node.Level >= level)
                    {
                        node = node.ParentNode;
                    }
                    BuildModel(node.Nodes);
                    break;
            }
        }
        #endregion

        #region Private Methods
        private void BuildModel(IEnumerable<SiteMapNode> nodes)
        {
            if (nodes == null) return;

            foreach (SiteMapNode child in nodes)
            {
                MenuItem item = new MenuItem { Name = child.Title, Url = child.Url };

                item.Selected = (_currentNode != null && _currentNode == child) || HasSelectedChild(child);

                if (child.Visible)
                {
                    Items.Add(item);
                }
            }
        }

        private bool HasSelectedChild(SiteMapNode item)
        {
            foreach (SiteMapNode node in item.Nodes)
            {
                if ((node == _currentNode) || HasSelectedChild(node))
                {
                    return true;
                }
            }
            return false;
        }
        #endregion
    }

    /// <summary>
    /// Represents a menu item.
    /// </summary>
    public class MenuItem
    {
        /// <summary>
        /// The display name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The menu item's URL.
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// Whether or not the menu item is selected.
        /// </summary>
        public bool Selected { get; set; }

        /// <summary>
        /// Whether or not the menu item is highlighted.
        /// </summary>
        public bool Highlighted { get; set; }
    }
}
