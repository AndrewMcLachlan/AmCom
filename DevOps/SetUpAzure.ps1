$azParams = @{
    AZSubscriptionId='04b5729b-6683-4b74-8380-bf1d18124f88';
    AZTenantId='6d07fbab-d208-464f-922f-0cfb031a9d7e';
    AZAppCred=(Get-Credential)
  }

  Install-Module -Name Posh-ACME -Scope CurrentUser

  Set-PAServer LE_PROD
  New-PACertificate '*.andrewmclachlan.com','andrewmclachlan.com' -DnsPlugin Azure -PluginArgs $azParams -AcceptTOS -Contact amc_home@hotmail.com 