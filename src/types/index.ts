type SteamListingInfoAsset = {
  link: string
  name: string
}

type SteamAssetDescription = {
  type: string
  value: string
}

type SteamListingInfoItem = {
  listingid: string
  converted_price: number
  converted_fee: number
  asset: {
    id: string
    market_actions: SteamListingInfoAsset[]
    contextid: string
  }
}

export type SteamMarketRender = {
  pagesize: number
  success: boolean
  total_count: number
  results_html: string
  listinginfo: {
    [listingid: string]: SteamListingInfoItem
  }
  assets: {
    [appid: number]: {
      [contextid: string]: {
        [id: string]: {
          market_actions: SteamListingInfoAsset[]
          descriptions: SteamAssetDescription[]
        }
      }
    }
  }
}

export type MapSteamMarketRenderResponse = {
  price: number | null
  listingId: string
  assetId: string
  pattern: null | number
}
