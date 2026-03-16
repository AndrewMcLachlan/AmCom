using System.Diagnostics;
using Microsoft.AspNetCore.DataProtection.Infrastructure;
using Umbraco.Cms.Core.Factories;

namespace Asm.AmCom.Web.Config;

/// <summary>
/// Returns a fixed machine identifier so that container restarts
/// don't create new server registrations in the database.
/// </summary>
/// <param name="applicationDiscriminator">Application discriminator.</param>
public class FixedMachineInfoFactory(IApplicationDiscriminator applicationDiscriminator) : IMachineInfoFactory
{
    private readonly string _machineName = Environment.GetEnvironmentVariable("MACHINE_NAME") ?? "amcom";

    /// <inheritdoc />
    public string GetMachineIdentifier() => _machineName;

    private string? _localIdentity;

    /// <inheritdoc />
    public string GetLocalIdentity()
    {
        if (_localIdentity is not null)
        {
            return _localIdentity;
        }

        using var process = Process.GetCurrentProcess();
        _localIdentity = Environment.MachineName // eg DOMAIN\SERVER
                         + "/" + applicationDiscriminator.Discriminator
                         + " [P" + process.Id // eg 1234
                         + "/D" + AppDomain.CurrentDomain.Id // eg 22
                         + "] " + Guid.NewGuid().ToString("N").ToUpper(); // make it truly unique

        return _localIdentity;
    }
}
