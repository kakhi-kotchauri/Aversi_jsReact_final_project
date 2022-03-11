import './productpage.css'
import { Pagehead } from "../product-head/pagehead";
import testimg from './pictures/testpic.png'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';





export function Productpage(props) {

let params = useParams()


const productdata = props.data[params.index]
const [img1, setimg1] = useState('')
const [img2, setimg2] = useState('')
const [bigimg, setbigimg] = useState('')






useEffect(() => {

    window.scrollTo({
        top: 100, 
    });
    
}, [])



useEffect(() => {
    if(productdata) {
        setimg1(productdata.img2)
        setimg2(productdata.img3)
        setbigimg(productdata.img)
    }
}, [props.data])


// console.log(img1)


    return(
    <div>
       
        {
            productdata ? 
            
            <div>

            <Pagehead 
            title={'წამალი'} 
            adress={
                    { 
                    title1 : 'მთავარი /',
                    title2 : 'წამლები /',
                    title3 : productdata.title
                    }
                } 

            redirect={
                { 
                redirect1 : '/',
                redirect2 : 'drugpage',
                }
            } 
                
                />

            <div className='des-product-content'>


            <div className="des-product-wrapper">

            {/* <div>{params.index}</div> */}


                
                <div className="des-product-image-par">


                <div className='des-picture-content'>
                
                <div className='des-smallimages'>

                    <div className="des-smallimage-wrapper">
                        <div onClick={() => setbigimg(img1)} className="des-smallimage-par">
                            <img className="des-smallimage-pic" src={img1} alt="" />
                        </div>
                    </div>

                    <div className="des-smallimage-wrapper">
                        <div  onClick={() => setbigimg(img2)} className="des-smallimage-par">
                            <img className="des-smallimage-pic" src={img2} alt="" />
                        </div>
                    </div>

                </div>

                    <div className="des-bigimage-wrapper">
                        <div onClick={() => setbigimg(productdata.img)} className="des-big-image-par">
                        <img className="des-bigimage" src={bigimg} alt="" />
                        </div>
                    </div>

                </div>   

                <div className='des-sidetext'>
                    
                    <p className='side-name'>{productdata.title}</p>

                    <p className='side-price'>{productdata.price} ლარი</p>
                    
                    <p className='side-texts'>{productdata.usage}</p>
                    <p className='side-texts'>ქვეყანა : {productdata.country}</p>
                    <p className='side-texts'>მწარმოებელი : {productdata.manufacturer}</p>
                    <p className='side-texts'>ოდენობა : {productdata.amount}</p>
                    <p className='side-texts'>კატეგორია : {productdata.Category}</p>

                    <div className='dummy'></div>

                    <button className='des-add'>კალათაში ჩამატება</button>

                </div>

                </div>

            </div>

           <div className='des-anotation-wrapper'>
            <div className='des-anotation'>
                 <p className='des-anot-text'>რადუქსინი საერთაშორისო დასახელება - raduksin ათქ.კლასიფიკაციის კოდი - M01AE01 კლინიკურ-ფარმაკოლოგიური ჯგუფი არასტეროიდული ანთების საწინააღმდეგო საშუალებები, პროპიონის მჟავას წარმოებული პრეპარატები გამოხატული ანალგეზიური ეფექტით ერთი გარსით გაფარული ტაბლეტი შეიცავს აქტიურ ნივთიერებას - იბუპროფების 400 მგ და დამხმარე ნივთიერებებს: ნატრიუმის კროსკარმელოზას, ნატრიუმის ლაურილსულფატს, ნატრიუმის ციტრატს, სტეარინის მჟავას, სილიციუმის კოლოიდურ ანჰიდრინს, ნატრიუმის კარმელოზას, ტალკს, აკაციას, საქაროზას, ტიტანის დიოქსიდს, მაგროგოლი 600-ს, ოპაკოდ S-1-9460 HV ყავისფერ სამრეწველო მეთილირებულ სპირტს, გამოხდილ წყალს. აღწერა ტაბლეტები 1,25 მგ და 10 მგ; თეთრი მრგვალი ორმხრივად ამოზნექილი ტაბლეტი, ერთგვაროვანი სტრუქტურით, ტაბლეტის ერთ მხარეს წითელი ფერის წარწერით: „Nurofen 400“. ფარმაკოლოგიური თვისებები პრეპარატი მიეკუთვნება არასტეროიდულ ანთების საწინააღმდეგო პრეპარატს. გააჩნია ტკივილგამაყუჩებელი, სიცხის დამწევი და ანთების საწინააღმდეგო მოქმედება. ახდენს ცოგ1-ისა და ცოგ2-ის არასელექციურ ბლოკადას. იბუპროფენის მოქმედების მექანიზმი განპირობებულია პროსტაგლანდინების-ტკივილის, ანთებისა და ჰიპერთერმული რეაქციის მედიატორების- სინთეზის დათრგუნვით. ფარმაკოკინეტიკა მისი აბსორბცია მაღალია. T 1/2 ნახევარგამოყოფის პერიოდი - 2 საათი; პლაზმის ცილებთან შეკავშირების ხარისხი - 90%. ნელა აღწევს სახსრების შიგნით, სადაც ხდება მისი შეკავება სინოვიალურ ქსოვილში, რომელშიც მისი კონცენტრაცია უფრო მარალია, ვიდრე პლაზმაში. აბსორბციის შემდეგ ფარმაკოლოგიურად არააქტიური R-ფორმის დაახლოებით 60% ნელა გარდაიქმნება აქტიურ S- ფორმად. განიცდის მეთაბოლიზმს. ელიმინირება თირკმლებით (უცვლელი სახით- არაუმეტეს 1%-სა) ხორციელდება, ნაკლებად- ნაღველთან ერთად.</p>
            </div>  
           </div>
  

           </div>

            </div>
            
            : null
        }

    </div>
    )
}

