using Asm.AmCom.Web.Config;
using Asm.AmCom.Web.Extensions;
using Umbraco.Cms.Api.Management.Security;
using Umbraco.Cms.Core.Composing;

namespace Umbraco.Extensions;

public class AzureADAuthenticationComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.AddAzureADAuthentication();
    }
}

public static class AzureADAuthenticationExtensions
{
    public static IUmbracoBuilder AddAzureADAuthentication(this IUmbracoBuilder builder)
    {
        // var config = builder.Config.GetSection("Azure").Get<AzureConfig>() ?? throw new InvalidOperationException("Azure configuration is missing");
        builder.Services.Configure<AzureConfig>(options => builder.Config.Bind("Azure", options));

        builder.Services.ConfigureOptions<AzureLoginOptions>();
        builder.Services.ConfigureOptions<AzureBackOfficeAuthenticationOptions>();
        builder.AddBackOfficeExternalLogins(logins =>
        {
            logins.AddBackOfficeLogin(
                backOfficeAuthenticationBuilder =>
                {
                    var schemeName = BackOfficeAuthenticationBuilder.SchemeForBackOffice(AzureLoginOptions.SchemeName);

                    ArgumentNullException.ThrowIfNull(schemeName, nameof(schemeName));

                    backOfficeAuthenticationBuilder.AddMicrosoftAccount(

                        // The scheme must be set with this method to work for the external login.
                        schemeName,

                        options =>
                        {
                            /*options.CallbackPath = "/signin-oidc";
                            options.ClientId = config.ClientId;
                            options.ClientSecret = config.ClientSecret;

                            // If you are using single-tenant app registration (e.g. for an intranet site), you must specify the Token Endpoint and Authorization Endpoint:
                            options.TokenEndpoint = $"https://login.microsoftonline.com/{config.TenantId}/oauth2/v2.0/token";
                            options.AuthorizationEndpoint = $"https://login.microsoftonline.com/{config.TenantId}/oauth2/v2.0/authorize";*/
                        });
                });
        });
        return builder;
    }
}
