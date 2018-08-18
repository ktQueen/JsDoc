/**
 * A module representing a jacket.
 * @module g2.maps.OlMap
 */
define([], function() {
    /**
     * @class
	 * @classdesc
     * Point geometry
	 * @extends g2.maps.IMap
	 * @alias g2.maps.Map
     * @param {Object} [htOption]
     * @param {Number} [htOption.width=320] (px) It only works when initialize this class. It's different from a set method in displayObject.
     * @param {Number} [htOption.height=480] (px)
     * @param {Number} [htOption.x=0] (px)
     * @param {Number} [htOption.y=0] (px)
     * @param {Boolean} [htOption.useEvent=true] Use event on this layer. If you want to improve performance of event, you can set this option as false.
     * @param {Boolean} [htOption.visible=true] Visibility
     * @param {Boolean} [htOption.freeze=false] A Layer will not updated more.
     * @param {Boolean} [htOption.renderingMode=inherit] You can use DOM mixed with Canvas to each layers. [inherit|dom|canvas]
     */
    var map = function(opts) {
        // ...
    };

    /** Zip up the jacket. */
    map.prototype.zip = function() {
        // ...
    };

    return Jacket;
});