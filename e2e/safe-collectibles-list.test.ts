import { getCollectibles } from '../src'
import config from './config'

describe('getCollectibles tests', () => {
  it('should fetch collectibles', async () => {
    const address = '0xb3b83bf204C458B461de9B0CD2739DB152b4fa5A'
    const data = await getCollectibles(config.baseUrl, '4', address)

    expect(data.length).toBeGreaterThanOrEqual(1)
    expect(typeof data[0].address).toBe('string')
    expect(typeof data[0].description).toBe('string')
    expect(data[0].imageUri).toMatch(/^http/)
    expect(data[0].metadata).toBeDefined()
    expect(data[0].name.length).toBeGreaterThan(0)
    expect(data[0].tokenName.length).toBeGreaterThan(0)
    expect(data[0].tokenSymbol.length).toBeGreaterThan(0)
    expect(data[0].uri.length).toBeGreaterThan(0)
  })
})
