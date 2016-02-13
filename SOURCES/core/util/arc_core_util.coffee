
ARC_CORE_UTIL = {}

ARC_CORE_UTIL.deepCopy = (ref_) ->
    if not ref_? or typeof ref_ isnt 'object'
        return ref_
    if ref_ instanceof Date
        return new Date ref_.getTime()
    if ref_ instanceof RegExp
        flags = ''
        flags += 'g' if ref_.global?
        flags += 'i' if ref_.ignoreCase?
        flags += 'm' if ref_.multiline?
        flags += 'y' if ref_.sticky?
        return new RegExp ref_.source, flags
    instance = new ref_.constructor()
    for key of ref_
        instance[key] = ARC_CORE_UTIL.deepCopy ref_[key]
    instance

ARC_CORE_UTIL.clone = (ref_) -> ARC_CORE_UTIL.deepCopy(ref_)

ARC_CORE_UTIL.dictionaryLength = (ref_) -> Object.keys(ref_).length

ARC_CORE_UTIL.getEpochTime = -> Math.round new Date().getTime() / 1000.0

module.exports = ARC_CORE_UTIL
