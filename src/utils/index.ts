import { MapSteamMarketRenderResponse, SteamMarketRender } from '@/types'

export const mapSteamMarketRenderResponse = (data: SteamMarketRender) => {
  return Object.keys(data.listinginfo).reduce<MapSteamMarketRenderResponse[]>((acc, listingId) => {
    const listing = data.listinginfo[listingId]
    const assetId = listing.asset.id
    const price = Number(((listing.converted_price + listing.converted_fee) / 100).toFixed(2))

    const assetInfo = data.assets[730][listing.asset.contextid][listing.asset.id]
    const charmTemplate = assetInfo.descriptions.find((el) => el.value.includes('Charm Template'))?.value || ''

    const pattern = charmTemplate ? Number(charmTemplate.match(/\d+/g)) : null

    return [...acc, { price, listingId, assetId, pattern }]
  }, [])
}
