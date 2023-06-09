var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");




$kol_jquery(function(){
  var sharingOptions = {
  "sharelinks" : [
    {"network": "facebook", "icon" : "facebook"},
    {"network": "twitter", "icon" : "twitter"},
    {"network": "email", "icon" : "envelope"}
  ]
};
  var anyform_widget_options = {
    list_id: 36360,
    page_id: 295247,
    
              api_url: 'https://web.archive.org/web/20210108095141/https://api.kickofflabs.com',
          leads_api_url: 'https://web.archive.org/web/20210108095141/https://leads.kickofflabs.com',

    display_powered_by: false,
    confirmation: {
      message: '<h1>Thanks for signing up!<\/h1><p>It\'s great to feel loved.<\/p>',
      share_message: '<p>These links were created just for you.<\/p>',
      
        template: 'social_share'
      
    },
    sharelinks: {
      networks: sharingOptions.sharelinks
    },
    
    validate_selector_exists: true,
    capture_lead_selector: 'form',
    email_selector: '',
    published_version: 2819046
  };

    var anyform_295247 = new KOLAnyForm(anyform_widget_options);
    window.anyform_295247 = anyform_295247;
  });





}