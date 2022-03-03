const searchbar = document.querySelector("#searchbar")
const submitbutton = document.querySelector("#searchbutton")

function remove_punc(astring) {
    const punc = ["!","?","-",";"]
    astring = astring.split("").filter(function(c){
        if(punc.includes(c))
        {
            return false
        }
        else
        {
            return true
        }
    })

    return astring.join("")
}

let searchTerm = null
const subscriptionKey = "6a3f3d6efb6242eabcbc1e1e4fcbeedc"
const customConfigId = "9781a285-0170-46be-8868-1405346b8833"



let searchoffset = 0

const searchresultlist = document.querySelector("#searchresult")

submitbutton.addEventListener("click", function() {
    searchTerm = remove_punc(searchbar.value)
    searchoffset=0
    pageid.textContent="page:"+(searchoffset/10).toString()

    while(searchresultlist.firstChild) {
        searchresultlist.removeChild(searchresultlist.firstChild);
    }

    let url= 'https://api.bing.microsoft.com/v7.0/custom/search?' + 
        'q=' + searchTerm + "&" + 'customconfig=' + customConfigId
    
    fetch(url, {
        headers:{
            'Ocp-Apim-Subscription-Key' : subscriptionKey,
            'offset' : searchoffset
        }
    }).then(res => res.json())
    .then(data =>{
        console.log(data)
        console.log(data.webPages.value)

        data.webPages.value.forEach(resultlink => {
            let newitem = document.createElement("li")
            let linkitem = document.createElement("a")
            linkitem.append(document.createTextNode(resultlink.name))
            linkitem.href=resultlink.url
            newitem.append(linkitem)

            searchresultlist.append(newitem)
        });
    })


})

const prevbtn = document.querySelector("#prev-page")
const nextbtn = document.querySelector("#next-page")
const pageid = document.querySelector("#pageindicator")

nextbtn.addEventListener("click",function () {
    searchoffset += 10
    pageid.textContent="page:"+(searchoffset/10).toString()

    

    if(searchTerm != null){

        while(searchresultlist.firstChild) {
            searchresultlist.removeChild(searchresultlist.firstChild);
        }

        let url= 'https://api.bing.microsoft.com/v7.0/custom/search?' + 
            'q=' + searchTerm + "&" + 'customconfig=' + customConfigId
        
        fetch(url, {
            headers:{
                'Ocp-Apim-Subscription-Key' : subscriptionKey,
                'offset' : searchoffset
            }
        }).then(res => res.json())
        .then(data =>{
            console.log(data)
            console.log(data.webPages.value)

            data.webPages.value.forEach(resultlink => {
                let newitem = document.createElement("li")
                let linkitem = document.createElement("a")
                linkitem.append(document.createTextNode(resultlink.name))
                linkitem.href=resultlink.url
                newitem.append(linkitem)

                searchresultlist.append(newitem)
            });
        })
    }
})

prevbtn.addEventListener("click",function () {
    searchoffset -= searchoffset > 0 ? 10 : 0;
    pageid.textContent="page:"+(searchoffset/10).toString()

    if(searchTerm != null){

        while(searchresultlist.firstChild) {
            searchresultlist.removeChild(searchresultlist.firstChild);
        }

        let url= 'https://api.bing.microsoft.com/v7.0/custom/search?' + 
            'q=' + searchTerm + "&" + 'customconfig=' + customConfigId
        
        fetch(url, {
            headers:{
                'Ocp-Apim-Subscription-Key' : subscriptionKey,
                'offset' : searchoffset
            }
        }).then(res => res.json())
        .then(data =>{
            console.log(data)
            console.log(data.webPages.value)

            data.webPages.value.forEach(resultlink => {
                let newitem = document.createElement("li")
                let linkitem = document.createElement("a")
                linkitem.append(document.createTextNode(resultlink.name))
                linkitem.href=resultlink.url
                newitem.append(linkitem)

                searchresultlist.append(newitem)
            });
        })
    }
})