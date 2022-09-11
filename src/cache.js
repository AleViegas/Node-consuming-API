import NodeCache from 'node-cache'

const cache = new NodeCache({stdTTL: 60*30})
// 60 seconds * 30 minutes

export default cache