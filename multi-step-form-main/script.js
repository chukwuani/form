// STEP ONE VARIABLES
const error = document.querySelectorAll(".error")
const input = document.querySelectorAll("input")
const inputContainer = document.querySelectorAll(".input-container")
const form = document.querySelector(".form-container")
const stepOneBtn = document.querySelector("#step-one-btn")
const stepOne = document.querySelector("#step-one")
const inputs = [...input]
const btn = document.querySelector(".button")

// STEP TWO VARIABLES
const stepTwoBtn = document.querySelector("#step-two-btn")
const stepTwo = document.querySelector("#step-two")
const numberTwo = document.querySelector("#two")
const numberOne = document.querySelector("#one")
const toggleBtn = document.querySelector(".toggle")
const mainSection = document.querySelectorAll(".main-section")
const plan = document.querySelectorAll("#plan")
const arcade = document.querySelector("#arcade")
const advanced = document.querySelector("#advanced")
const pro = document.querySelector("#pro")
const options = document.querySelectorAll(".options")
const stepTwoBack = document.querySelector("#step-two-back")



// STEP THREE VARIABLES
const stepThree = document.querySelector("#step-three")
const stepThreeBtn = document.querySelector("#step-three-btn")
const numberThree = document.querySelector("#three")
const checkBox = document.querySelectorAll(".checkbox")
const addOn = document.querySelectorAll(".add-on")
const service = document.querySelector("#online-service")
const storage = document.querySelector("#larger-storage")
const profile = document.querySelector("#customizable-profile")
const stepThreeBack = document.querySelector("#step-three-back")


// STEP FOUR VARIABLES
const stepFour = document.querySelector("#step-four")
const numberFour = document.querySelector("#four")
const duration = document.querySelector(".selected-span")
const totalTxt = document.querySelector("#total-text")
const activePlan = document.querySelector("#selected-plan")
const planPrice = document.querySelector("#selected-plan-price")
const priceDuration = document.querySelector("#price-duration")
const addonDuration = document.querySelectorAll("#add-on-duration")
const totalPrice = document.querySelector("#total-price")
const stepFourBack = document.querySelector("#step-four-back")
const stepFourBtn = document.querySelector("#step-four-btn")


// STEP FIVE VARIABLES
const stepFive = document.querySelector("#step-five")

// STEP ONE
btn.addEventListener("click", (e) => {
    e.preventDefault()  

    const allValid = inputs.every(field => field.value.length >= 1)

    for (let i = 0; i < inputContainer.length; i++) {
        if (allValid) {
            stepOneBtn.addEventListener("click", () => {
                stepOne.style.cssText = "display: none";
                stepTwo.style.cssText = "display: flex";
    
                numberTwo.classList.add("active")
                numberOne.classList.remove("active")
            })  
            
        }else{
            inputContainer[i].classList.add("empty-input")
        }
        
        // REMOVE CLASSLIST AFTER TWO SECONDS
        setTimeout(() => {
            inputContainer[i].classList.remove("empty-input")
        }, 2000);
    }

    if (inputs[0].value.length >= 1) {
        inputContainer[0].classList.remove("empty-input")
    }

    if (inputs[1].value.length >= 1) {
        inputContainer[1].classList.remove("empty-input")
    }

    if (inputs[2].value.length >= 1) {
        inputContainer[2].classList.remove("empty-input")
    }
 
})



// STEP TWO
toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("toggled")
    for (let i = 0; i < mainSection.length; i++) {
       mainSection[i].classList.toggle("yearly") 

    if (mainSection[i].classList.contains("yearly")) {
        arcade.textContent = "$90/yr"
        advanced.textContent = "$120/yr"
        pro.textContent = "$150/yr"
        duration.textContent = "(Yearly)"
        totalTxt.textContent = "Total(per year)"
        priceDuration.textContent = "yr"

        service.textContent = "$10/yr"
        storage.textContent = "$20/yr"
        profile.textContent = "$20/yr"

        onlineActivePrice.textContent = "10"
        customActivePrice.textContent = "20"
        largerActivePrice.textContent = "20"

        addonDuration.forEach(element => element.textContent = "yr")
    }else{

        arcade.textContent = "$9/mo"
        advanced.textContent = "$12/mo"
        pro.textContent = "$15/mo"
        duration.textContent = "(Monthly)"
        totalTxt.textContent = "Total(per month)"
        priceDuration.textContent = "mo"

        service.textContent = "+$1/mo"
        storage.textContent = "+$2/mo"
        profile.textContent = "+$2/mo"

        onlineActivePrice.textContent = "1"
        customActivePrice.textContent = "2"
        largerActivePrice.textContent = "2"

        addonDuration.forEach(element => element.textContent = "mo")
    }   
    }  
     
    for (let i = 0; i < plan.length; i++) {
        plan[i].classList.toggle("active-plan")
    }

})

options[0].addEventListener("click", () => {
    options[0].classList.add("active-option")
    options[1].classList.remove("active-option")
    options[2].classList.remove("active-option")
})

options[1].addEventListener("click", () => {
    options[0].classList.remove("active-option")
    options[1].classList.add("active-option")
    options[2].classList.remove("active-option")
})

options[2].addEventListener("click", () => {
    options[0].classList.remove("active-option")
    options[1].classList.remove("active-option")
    options[2].classList.add("active-option")
})

stepTwoBtn.addEventListener("click", () => {
    for (let i = 0; i < mainSection.length; i++) {
        if (!mainSection[i].classList.contains("yearly")){
            if (options[0].classList.contains("active-option")) {
                planPrice.textContent = "9" 
             }
             
             if(options[1].classList.contains("active-option")){
                planPrice.textContent = "12"
             }
             
             if(options[2].classList.contains("active-option")){
                planPrice.textContent = "15"
             }
           }else{
            if (options[0].classList.contains("active-option")) {
                planPrice.textContent = "90" 
             }
             
             if(options[1].classList.contains("active-option")){
                planPrice.textContent = "120"
             }
             
             if(options[2].classList.contains("active-option")){
                planPrice.textContent = "150"
             }
           }
    }

    stepThree.style.cssText = "display: flex;"
    stepTwo.style.cssText = "display: none;"

    numberTwo.classList.remove("active")
    numberOne.classList.remove("active")
    numberThree.classList.add("active")
})

stepTwoBack.addEventListener("click", () => {
    stepOne.style.cssText = "display: flex;"
    stepTwo.style.cssText = "display: none;"

    numberTwo.classList.remove("active")
    numberOne.classList.add("active")
    numberThree.classList.remove("active")
    numberFour.classList.remove("active")
})


const online = document.querySelector("#service")
const larger = document.querySelector("#storage")
const custom = document.querySelector("#profile")
const addContainer = document.querySelector(".active-add-on-container")
const onlineActive = document.querySelector("#service-active")
const largerActive = document.querySelector("#storage-active")
const customActive = document.querySelector("#profile-active")
const onlineActivePrice = document.querySelector("#service-active-price")
const largerActivePrice = document.querySelector("#storage-active-price")
const customActivePrice = document.querySelector("#profile-active-price")

// STEP THREE
for (let i = 0; i < addOn.length; i++) {
    addOn[i].addEventListener("click", () => {
        addOn[i].classList.toggle("selected-add-on")
    })
}

stepThreeBack.addEventListener("click", () => {
    stepTwo.style.cssText = "display: flex;"
    stepThree.style.cssText = "display: none;"

    numberTwo.classList.add("active")
    numberOne.classList.remove("active")
    numberThree.classList.remove("active")
})

stepThreeBtn.addEventListener("click", () => {
if (options[0].classList.contains("active-option")) {
   activePlan.textContent = "Arcade" 
}else if(options[1].classList.contains("active-option")){
    activePlan.textContent = "Advanced"
}else if(options[2].classList.contains("active-option")){
    activePlan.textContent = "Pro"
}
    stepFour.style.cssText = "display: flex"
    stepThree.style.cssText = "display: none;"
    stepTwo.style.cssText = "display: none;"

    numberTwo.classList.remove("active")
    numberOne.classList.remove("active")
    numberThree.classList.remove("active")
    numberFour.classList.add("active")

    totalPrice.textContent = planPrice.textContent

    if (!online.classList.contains("selected-add-on") && !larger.classList.contains("selected-add-on") && !custom.classList.contains("selected-add-on")) {
        addContainer.style.cssText = "display: none;"
    } else {
        addContainer.style.cssText = "display: flex;"
    }

    if (online.classList.contains("selected-add-on")) {
        onlineActive.style.cssText = "display: flex;"
        // addContainer.style.cssText = "display: flex;"
        totalPrice.textContent = eval(+totalPrice.textContent + +onlineActivePrice.textContent) 
    }else{
        onlineActive.style.cssText = "display: none;"
    }

     if(larger.classList.contains("selected-add-on")){
        largerActive.style.cssText = "display: flex;"
        // addContainer.style.cssText = "display: flex;"
        totalPrice.textContent = eval(+totalPrice.textContent + +largerActivePrice.textContent) 
     }else{
        largerActive.style.cssText = "display: none;"
     }

     if(custom.classList.contains("selected-add-on")){
        customActive.style.cssText = "display: flex;"
        // addContainer.style.cssText = "display: flex;"
        totalPrice.textContent = eval(+totalPrice.textContent + +customActivePrice.textContent) 
     }else{
        customActive.style.cssText = "display: none;"
     }
})

const change = document.querySelector(".change")
change.addEventListener("click", () => {
    stepFour.style.cssText = "display: none;"
    stepTwo.style.cssText = "display: flex;"

    numberTwo.classList.add("active")
    numberFour.classList.remove("active")
})

stepFourBack.addEventListener("click", () => {
    stepThree.style.cssText = "display: flex;"
    stepFour.style.cssText = "display: none;"

    numberTwo.classList.remove("active")
    numberOne.classList.remove("active")
    numberThree.classList.add("active")
    numberFour.classList.remove("active")
})


stepFourBtn.addEventListener("click", () => {
        stepFour.style.cssText = "display: none"
        stepThree.style.cssText = "display: none;"
        stepTwo.style.cssText = "display: none;"
        stepFive.style.cssText = "display: flex;"
    })