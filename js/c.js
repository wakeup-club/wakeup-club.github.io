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

var  durl = "https://web.archive.org/web/20210108095139/https://misterspoils.com/lp3/";

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text().toLowerCase()).select();
    document.execCommand("copy");
    $temp.remove();
}

$.fn.cycle = function() {
  var counter = 0;
  var self = this;

  this.each(function() {
    $(this).hide();
  });

  this.first().show();

  setInterval(function() {
    counter = next(counter);
  }, 1500);

  function next(counter) {
    self.eq(counter).fadeOut(function() {
      if (counter === self.length - 1) {
        counter = 0;
      }
      else {
        counter++;
      }
      self.eq(counter).fadeIn();
    });
    return counter;
  }

}

$(document).ready(function () {
    var $menu = $('#mobilemenu');
    $('.quote').cycle();
    $(document).mouseup(e => {
        if (!$menu.is(e.target) // if the target of the click isn't the container...
            &&
            $menu.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $menu.removeClass('is-active') ;
        }
    });

    $('.togglemenu').on('click', () => {
        $menu.toggleClass('is-active');
    });

    ($(document)).on('kol:beforeSubmit', 'form', (function (_this) {
      return function (event, ret) {
        $('#kol-form-submit-button').attr('disabled','disabled');
        //let result = isValidAddress($('#email').val());
        //console.log(result);
        // let data = result.responseJSON;
        let data = { status: "OK" }
        try {
          if (data.status === 'OK') {
            ret.cancel = false;
          } else if (data.status === "Invalid") {
            $.notify({
              // options
              message: 'Invalid Email Address',
            },{
              // settings
              placement: {
                from: "bottom",
                align: "left"
              },
              offset: {x: 20, y: 20},
              spacing: 10,
              z_index: 1031,
              delay: 2500,
              timer: 1000,
              mouse_over: null,
              animate: {
                enter: 'animated fadeInUp',
                exit: 'animated fadeOutDown'
              },
              template: '<div id="notification-message" data-notify="container" class="col-10 col-sm-4 alert alert-{0}" role="alert">' +
                '<span data-notify="message">{2}</span>' +
              '</div>'
            });
            ret.cancel = true;
            setTimeout(function() {
              window.location.href = "";
            }, 5000);
          } else {
            ret.cancel = true;
          }
        }
        catch (error) {
          ret.cancel = true;
          alert('A network error found while signup!');
        }
        return ret;
      }
    })(this));
});

function isValidAddress(email) {
  return $.ajax({
    type:"POST",
    url: durl+"response.php",
    data:{ email: email, type: "email_validation", },
    async: false,
    dataType: 'json',
  });
}
// User logout function when click on logout button on header section
  function usersLogout(){
    $.ajax({
          type:"POST",
          url: durl+"response.php",
          data:"emailaddress="+loginemail+"&type=UserLogout",
          success: function(success){
                window.location.href=success;
          },
          error:  function() {
            alert('A network error found while logout button click!');
            return false;
          }
    });

  }

}