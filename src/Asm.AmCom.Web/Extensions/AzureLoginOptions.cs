using Microsoft.Extensions.Options;
using Umbraco.Cms.Api.Management.Security;
using Umbraco.Cms.Core;

namespace Asm.AmCom.Web.Extensions;

public record AzureLoginOptions : IConfigureNamedOptions<BackOfficeExternalLoginProviderOptions>
{
    public const string SchemeName = "OpenIdConnect";

    public void Configure(string? name, BackOfficeExternalLoginProviderOptions options)
    {
        if (name == Constants.Security.BackOfficeExternalAuthenticationTypePrefix + SchemeName)
        {
            Configure(options);
        }
    }

    public void Configure(BackOfficeExternalLoginProviderOptions options)
    {
        // The following options are relevant if you
        // want to configure auto-linking on the authentication.
        options.AutoLinkOptions = new ExternalSignInAutoLinkOptions(

            // Set to true to enable auto-linking
            autoLinkExternalAccount: true,

            defaultUserGroups: [Constants.Security.EditorGroupKey.ToString()],

            // [OPTIONAL]
            // Default: The culture specified in appsettings.json.
            // Specify the default culture to create the Member as.
            // It can be dynamically assigned in the OnAutoLinking callback.
            defaultCulture: null
        )
        {
            // [OPTIONAL] Callbacks
            OnAutoLinking = (autoLinkUser, loginInfo) =>
            {
                // Customize the Member before it's linked.
                // Modify the Members groups based on the Claims returned
                // in the external login info.
                autoLinkUser.IsApproved = true;
            },
            OnExternalLogin = (user, loginInfo) =>
            {
                // Customize the Member before it is saved whenever they have
                // logged in with the external provider.
                // Sync the Members name based on the Claims returned
                // in the external login info

                // Returns a boolean indicating if sign-in should continue or not.
                return true;
            }
        };

        options.DenyLocalLogin = false;
        //options.AutoRedirectLoginToExternalProvider = true;
    }
}
