function domainName(url){
    const getURL = url.replace('http://', "").replace('www.','').replace('https://', '')
    return getURL.split('.')[0]
    }