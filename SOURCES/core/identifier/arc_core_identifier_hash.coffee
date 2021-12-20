
MURMUR = require 'murmurhash-js'

MODULE = module.exports = {}

MODULE.murmur32FromUTF8 = (utf8_) ->
    utf8 = Buffer.from utf8_, 'utf-8'
    ascii = utf8.toString 'ascii'
    MURMUR ascii

MODULE.murmur32FromReference = (ref_) ->
    MODULE.murmur32FromUTF8 JSON.stringify ref_

MODULE.shortIRUTFromMurmur32 = (hash_) ->
    buffer = Buffer.alloc 4
    buffer.writeUInt32LE hash_, 0
    r1 = buffer.toString 'base64'
    pads = 0
    while r1.charAt(r1.length - pads - 1) == '='
        pads++
    r2 = r1.slice 0, r1.length - pads
    r3 = r2.replace(/\+/g, "-")
    r4 = r3.replace(/\//g, "_")
    r4

MODULE.shortIRUTFromUTF8 = (utf8_) ->
    MODULE.ShortIRUTFromMurmur32 MODULE.murmur32FromUTF8 utf8_

MODULE.shortIRUTFromReference = (ref_) ->
    MODULE.ShortIRUTFromMurmur32 MODULE.murmur32FromReference ref_
