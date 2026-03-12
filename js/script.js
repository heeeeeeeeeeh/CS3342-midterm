// NOTE: You may use the sample user in the data/user.json file to test your code before your hit the API. 
// Write your code below.
$(document).ready(function() {
  $("#next-btn").click(function() {
    fetch("https://randomuser.me/api").then((res) => {
      return res.json()
    }).then((json) => {
      let data = json.results[0]
      console.log(data)
      let nameObj = data.name
      let locObj = data.location
      $("#name").text(`${nameObj.first} ${nameObj.last}`)
      $("#email").text(`${data.email}`)
      $("#address").text(`${locObj.city}, ${locObj.state}. ${locObj.country}`)
      $("#age").text(`${data.dob.age}`)
      $("#pic").attr("src", data.picture.large)
      if (data.gender === "male") {
        $("body").removeClass("female")
        $("body").addClass("male")
      } else {
        $("body").addClass("female")
        $("body").removeClass("male")
      }
      let p = $("#phone")
      p.text(`Mobile: ${data.cell}`)
      $(".details").append(p)
    })
  })
})
