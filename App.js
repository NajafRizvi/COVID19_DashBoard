function Updatemap(){
    fetch("/API.json")
    .then(values=>values.json())
    .then(res=>{
        console.log(res.data)
        res.data.forEach(element => {
            latitude = element.latitude
            longitude = element.longitude 
            cases = element.infected
            country = element.name
            recovered = element.recovered
            dead = element.dead
            if(cases>200){
                color = "rgb(255,0,0)"
            }
            else{
                color = `rgb(${cases},0,0)`
            }
            var marker = new mapboxgl.Marker({
                draggable: false,
                color:color
                })
                .setLngLat([longitude,latitude])
                .setPopup(new mapboxgl.Popup().setHTML(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
                    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    </head>
            <body>
            <div class="container flex mx-auto  items-center justify-center">
            <h1 class="text-4xl font-bold text-black tracking-wide">${country}</h1>
            </div>
                <div class="container flex mx-auto  items-center justify-center">
               
   <ul class="flex flex-col bg-grey-300 p-4">
  
        <li class="flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-red-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4"><i class="fa fa-plus-square" style="font-size:20px;color:red"></i></div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Infected</div>
              
            </div>
            <div class="font-medium text-xs">${cases}</div>
          </div>
        </li>
        <li class="border-white-400 flex flex-row mb-2">
        <div class="select-none cursor-pointer bg-green-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4"><i class="fa fa-heart" style="font-size:20px;color:red"></i></div>
          <div class="flex-1 pl-1 mr-16">
            <div class="font-medium">Recovered</div>
            
          </div>
          <div class="font-medium text-xs">${recovered}</div>
        </div>
      </li>
      <li class="border-white-400 flex flex-row mb-2">
      <div class="select-none cursor-pointer bg-blue-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4"><i class="fa fa-heartbeat" style="font-size:20px;color:red"></i></div>
        <div class="flex-1 pl-1 mr-16">
          <div class="font-medium">Death</div>
          
        </div>
        <div class="font-medium text-xs">${dead}</div>
      </div>
    </li>
    </ul>
    
  </div>

                </body>
                </html>`))
                .addTo(map);
                
        });
    })
      
}
Updatemap();
