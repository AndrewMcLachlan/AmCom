using Asm.AmCom.Web.Config;
using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using Microsoft.Extensions.Options;
using Umbraco.Cms.Core;

namespace Asm.AmCom.Web.Extensions;

public class AzureBackOfficeAuthenticationOptions(IOptions<AzureConfig> azureOptions) : IConfigureNamedOptions<MicrosoftAccountOptions>
{
    public void Configure(string? name, MicrosoftAccountOptions options)
    {
        if (name == Constants.Security.BackOfficeExternalAuthenticationTypePrefix + AzureLoginOptions.SchemeName)
        {
            Configure(options);
        }
    }

    public void Configure(MicrosoftAccountOptions options)
    {
        options.CallbackPath = "/signin-oidc";
        options.ClientId = azureOptions.Value.ClientId;
        options.ClientSecret = azureOptions.Value.ClientSecret;

        // If you are using single-tenant app registration (e.g. for an intranet site), you must specify the Token Endpoint and Authorization Endpoint:
        options.TokenEndpoint = $"https://login.microsoftonline.com/{azureOptions.Value.TenantId}/oauth2/v2.0/token";
        options.AuthorizationEndpoint = $"https://login.microsoftonline.com/{azureOptions.Value.TenantId}/oauth2/v2.0/authorize";
    }
}
