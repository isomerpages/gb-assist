// Add your notification into "notifications" and separate them with a comma. Ensure that they are in double quotes.

const custom_notifications = [
  //"<b>[Attention: System Maintenance]</b> Information from ACRA for GoBusiness Licensing, Guided Journey for Food Services and Start a Business e-Adviser will experience intermittent delays from 25 Oct 2021, 9am to 27 Oct 2021 6pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing, e-Advisers, Guided Journeys and Business Grants will be unavailable on 22 Apr 2022 from 10pm to 4pm due to scheduled maintenance. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> e-Advisers for Business Structure and Starting a Business will be unavailable due to scheduled maintenance on 8 Sep 2021 from 6pm to 8pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> GoBusiness Dashboard's payment services will be unavailable due to scheduled maintenance on 25 May 2022 from 2.30pm to 6pm. All other services on GoBusiness will remain available. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Guided Journey for Food Services and Covid Services will be unavailable due to scheduled maintenance from 26 May 2022 7pm to 27 May 2022 6am. All other services on GoBusiness will remain available.  We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Information from ACRA for GoBusiness and Business Grants will be unavailable due to scheduled maintenance from 27 May 2022 from 12am to 5am. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Information from ACRA and MyInfo for GoBusiness and Business Grants will be unavailable due to scheduled maintenance on 1 May 2022 from 12am to 8am. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> Business Grant Portal will be undergoing scheduled maintenance on 8 April 2022 from 6:00 PM to 9:00 PM. We apologise for any inconvenience.",


  //[**LICENCEONE DOWNTIME**]
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable due to an urgent maintenance from 12 Jul 2022 10pm to 13 Jul 2022 6am. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused."
  "<b>[Attention: System Maintenance]</b> GoBusiness Licensing will be unavailable on the dates below due to scheduled maintenance. Guided Journey for Food Services will remain available. We apologise for the inconvenience caused.<br>(1) From 12 Jul 2022 10pm to 13 Jul 2022 6am<br>(2) From 15 Jul 2022 10pm to 16 Jul 2022 6am<br>(3) From 16 Jul 2022 10pm to 17 Jul 2022 6am",

  //[**ACRA DOWNTIME**]
  //"<b>[Attention: System Maintenance]</b> Name reservation application and business registration for Sole Proprietorship/Partnership will be unavailable due to scheduled maintenance from 25 Jun 2022 6pm to 26 Jun 2022 2am. We apologise for the inconvenience caused."
  //"<b>[Attention: System Maintenance]</b> Name reservation application and business registration for Sole Proprietorship/Partnership will be unavailable on dates below due to scheduled maintenance. We apologise for the inconvenience caused.<br>(1) 30 Apr 2022 from 2am to 8am<br>(2) 7 May 2022 from 12am to 3am",  

  //[**LICENSING AGENCY DOWNTIME**]
  //"<b>[Attention: System Maintenance]</b> GoBusiness Licensing, e-Advisers and Guided Journeys will be unavailable due to scheduled maintenance till 5 October 2021 12pm. We apologise for the inconvenience caused.",
  //"<b>[Attention: System Maintenance]</b> Information from ACRA for GoBusiness and Business Grants will be unavailable due to scheduled maintenance on from 4 Jun 2022 2pm to 5 Jun 2022 12am. We apologise for the inconvenience caused."
  
  //[**SPF DOWNTIME**]
  //"<b>[Attention: System Maintenance]</b> Application, amendment & renewing of Singapore Police Force (SPF) licences will be unavailable during the upcoming scheduled maintenance on 5 Jun 2022 from 6.30pm to 7pm. <b>All other licences in Guided Journey for Food Services will remain available.</b> We apologise for the inconvenience caused."

  //[**ADHOC**]
  //IPOS DOWNTIME
  //"<b>[Attention: System Maintenance]</b> The business name search feature of e-Adviser for Starting a Business is under maintanence. All other features will remain available and you may still use the e-Adviser. We apologise for the inconvenience caused.",

  //[**GCC Migration**]
  //"<b>[Attention: System Maintenance]</b> Guided Journey and eAdvisers will be unavailable due to scheduled maintenance from 30 Jun 2022 7pm to 1 Jul 2022 6am. All other services on GoBusiness will remain available.  We apologise for the inconvenience caused.",

  //[**APEX**]
  //"<b>[Attention: System Maintenance]</b> GoBusiness will be unavailable during the upcoming scheduled maintenance on 3 Jul 2022 from 12am to 8am. We apologise for the inconvenience caused."

];

// Do not edit the following code

const custom_notificationContainer = `<div class="notifications-container"></div>`;
$(document).ready(function () {
  $("html.has-navbar-fixed-top-widescreen").attr(
    "style",
    "padding-top: 0 !important"
  );
  $(".masthead-container").attr("style", "position: relative");
  $(".bp-container>div").attr("style", "margin-top: 0; margin-bottom: 0");
  $(".bp-container>div>div").attr("style", "padding: 0");
  $(".masthead-container").prepend(custom_notificationContainer);

  custom_notifications.forEach(m => {
    let notification = `<div class="notification-container">
          <h6 class="x">${m}</h6>
          <div class="control notif" style="background-color: #037e8a;">
            <a id="cancel-notification" class="button has-text-white" href="#">
              <span class="delete sgds-icon sgds-icon-cross is-size-4"></span>
            </a>
          </div>
        </div>`;
    $(".notifications-container").append(notification);
  });
  $(window).scrollTop();
  $(".control.notif").each(function () {
    $(this).click(function () {
      $(this).parent().remove();
    });
  });
  $(".x>a").attr("target", "_blank");
});
