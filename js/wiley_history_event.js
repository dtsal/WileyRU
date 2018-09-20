/**
 * Created by tsald on 12/16/2016.
 */
<![CDATA[

function MakeTransparent(evt) {
    var vastagePoly = evt.target.id;
    var lengthIdPoly = vastagePoly.length;
    var lengthIdEvent = lengthIdPoly - 4;
    var eventId = vastagePoly.substr (0,lengthIdEvent);
    var vastage = this.document.getElementById(eventId);
    vastage.style.opacity = 1;
}

function MakeOpaque(evt) {
    var vastagePoly = evt.target.id;
    var lengthIdPoly = vastagePoly.length;
    var lengthIdEvent = lengthIdPoly - 4;
    var eventId = vastagePoly.substr (0,lengthIdEvent);
    var vastage = this.document.getElementById(eventId);
    vastage.style.opacity = 0.7;
}
]]>