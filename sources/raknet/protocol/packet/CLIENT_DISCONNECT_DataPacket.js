'use strict';

/* global minejs */
module.exports = {
    onLoad: ()=>{
        minejs.raknet.protocol.packet.CLIENT_DISCONNECT_DataPacket =
        
        class CLIENT_DISCONNECT_DataPacket extends minejs.raknet.protocol.Packet{
            static get ID() { return 0x15; }
            getID(){ return this.ID; }
        };
    }
};