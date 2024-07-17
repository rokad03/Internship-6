import react from "react"
function Donate() {
  const loadScript=(src)=>{
    return new Promise((resolve)=>{
      const script=document.createElement('script')
      script.src=src
      script.onload=()=>{
        resolve(true)
      }

      script.onerror=()=>{
        resolve(false);
      }

      document.body.appendChild(script)
    })
  }
  const displayRazorPay= async (amount)=>{
    const res= await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res){
      alert("You are Offline... Failed to load")
      return 
    }
    const options={
      key:"rzp_test_B850JzFrpSUch7",
      currency:"INR",
      amount:amount*100,
      name:"Freetube",
      description:"Thanks for purchasing",
      image:"",
      handdler:function (response){
        alert(response.razorpay_payment_id)
      },
      prefill:{
        name:"Nishit",
      }
      // if(response.razorpay_payment_id)
    }
    const paymentObject=new window.Razorpay(options);
    paymentObject.open()
  }
  return (

    <div className="App">
     <button onClick={()=>{displayRazorPay(1)}}>click here</button>
    </div>
  );
}

export default Donate;
