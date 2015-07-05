/*

    _  _    _____ ___  _____  ______ _____  _____        _____ _________     ___ 
  _| || |_ / ____/ _ \|  __ \|  ____|  __ \|  __ \ /\   |  __ \__   __\ \   / / |
 |_  __  _| |   | | | | |  | | |__  | |__) | |__) /  \  | |__) | | |   \ \_/ /| |
  _| || |_| |   | | | | |  | |  __| |  _  /|  ___/ /\ \ |  _  /  | |    \   / | |
 |_  __  _| |___| |_| | |__| | |____| | \ \| |  / ____ \| | \ \  | |     | |  |_|
   |_||_|  \_____\___/|_____/|______|_|  \_\_| /_/    \_\_|  \_\ |_|     |_|  (_)
                                                                                 

  coderparty v. 0.7 by github user sqrdcat, aka twitter user yatovevo
  please do not steal because that would make you an asshole
  did you know that while in your mother's womb at a certain point in time you were just an asshole?
  stealing my code prooves that some people never develop beyond that stage 

  with that said, please do not remove this piece of ASCII art and the line below it.

*/




Posts = new Meteor.Collection("posts");
Members = new Meteor.Collection("members");

Meteor.methods({
  
  charlie: function(){
      var d = new Date()
      var x = d.getDate();
      var y = (d.getMonth() < 10 ? '0' : '') + d.getMonth();
      var z = d.getFullYear();
      var alpha = d.getHours();
      var beta = d.getMinutes();
      return x + "." + y + "." + z + "  " + alpha + ":" + beta;
  }
});

if (Meteor.isClient) {

   /* DEBUG HELPER */
  output = function(proto,n){
      console.log("Output "+proto+" exited with code "+n)
    }


/* ================================================== */

  Template.body.rendered = function () {

    /* IMPORT SCRIPTS */
    $.getScript("internal/VARIABLES.js");
    $.getScript("PROJECT.js");

    /* SET ELEMENTS TO THEIR RESPECTIVE CONFIG VARIABLES */
    document.getElementById("projdesc").innerHTML = projectdesc;
    document.getElementById("projver").innerHTML = projectver;
    document.body.style.backgroundColor = pagebg;
        document.getElementById("adminbox").innerHTML = git_username;
    /* PURGE HELPERS */
    foxtrot = function(){
       output("FOXTROT",3+3);
       Meteor.call("purge");
    }

    $('#purger').click(function(){ foxtrot(); return false; });




}


/* ================================================== */


  Template.body.helpers({
    posts: function () {
      return Posts.find({}, {sort: {createdAt: -1}}, {reactive:false});
    },
     members: function () {
      return Members.find({}, {sort: {createdAt: -1}}, {reactive:false});
    },

    postscount: function () {
      return Posts.find({}, {sort: {createdAt: -1}}).count();
    },
    coders: function() {
      return Members.find({}, {sort: {createdAt: -1}}).count();
    },
    equals: function(a, b){
      return a == b;
    },
    admin: function(){
      var username = git_username;
      return username;
    },
    trellourl: function(){
      var trellourl = trello_board_url;
      return trellourl;
	  },
    gituser: function(){
      var gituser = git_username;
      return gituser;
    },
    gitrepo: function(){
      var gitrepo = git_repo;
      return gitrepo;
    }
  });


/* ================================================== */

  Template.body.events({
    "submit .new-post": function (event) {

      var title = event.target.title.value;
      if(title != ""){

          Posts.insert({
          title: title,
          createdAt: new Date()
        });
      
      return false;


            } else {
                  console.log("0xdeadbeef");
              } 
      event.target.title.value = "";
      event.preventDefault();

    },

    "submit .new-member": function (event) {
      var username = event.target.userinput.value;

        Members.insert({
          username: username,
          createdAt: new Date()
        });
            

      event.target.userinput.value = "";
      return false;
}

  });

/* ================================================== */

  Template.post.events({
    "click .delete": function () {
      if (confirm('Are you sure ?')) { 
Posts.remove(this._id);
}
      
    }
  });

    Template.member.events({
    "click .deletemmbr": function () {
      if (confirm('Are you sure ?')) { 
Members.remove(this._id);
}
      
    }
  });


}

/* ================================================== */

if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      purge: function() {

        return Posts.remove({});
        console.log(1+1);

      },
      purgemmbrs: function() {

        return Members.remove({});
        console.log(1+1);},

      getPostsCount: function () {
      return Posts.find().count();
    }

    });

  });

}
