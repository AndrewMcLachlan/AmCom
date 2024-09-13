﻿namespace Asm.AmCom.Web.Config;

public record AzureConfig()
{
    public required string TenantId { get; init; }

    public required string ClientId { get; init; }

    public required string ClientSecret { get; init; }
}
