// Main code for add-on
var FennecGallery = {
	onLoad : function(aEvent) {
		
	},

	onUIReady : function(aEvent) {
		
	},

	onUIReadyDelayed : function(aEvent) {
		PageActions.register("fennec-gallery-render-gallery", FennecGallery.updatePageAction, FennecGallery );
	},

	buildGallery : function() {
		var page = Browser.contentDocument;
	},

	updatePageAction : function(aAction) {
		if( Services.prefs.getBoolPref("extensions.fennec-gallery.enabled") == false ) {
			return false;
		}
		var page = Browser.contentDocument;
		if( !this.isGalleryPage(page) ) {
			return false;
		}
		return true;
	},

	isGalleryPage: function(contentDocument) {
		return isPicassaGaller;
	},

	isPicassaGallery: function( contentDocument ) {
		
	}

};

window.addEventListener("load", function( e ) {
	FennecGallery.onLoad(e);
}, false );

window.addEventListener("UIReady", function( e ) {
	FennecGallery.onUIReady(e);
}, false );

window.addEventListener("UIReadyDelayed", function( e ) {
	FennecGallery.onUIReadyDelayed(e);
}, false );