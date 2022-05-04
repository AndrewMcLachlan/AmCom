using Umbraco.Cms.Core.Models.PublishedContent;

namespace Umbraco.Extensions;

public static class IPublishedContentExtensions
{
    public static T ValueOr<T>(this IPublishedContent model, string alias, T other) =>
        model.HasValue(alias) ? model.Value<T>(alias) : other;

    public static string ValueAnd(this IPublishedContent model, string alias, string format) =>
        model.HasValue(alias) ? String.Format(format, model.Value<string>(alias)) : String.Empty;
}
