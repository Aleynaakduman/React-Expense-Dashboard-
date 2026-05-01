
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiWallet, CiSearch } from "react-icons/ci";
import { GrAnalytics } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import '../css/Table.css'
import {useEffect, useState} from 'react'


function Table() {

  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetch('https://69f4f68efb098eb7f0b502f0.mockapi.io/api/expenses')
    .then(ress => ress.json())
    .then(data => setRows(data))
  })

const totalExpense = rows.reduce((sum, row) => sum + Number(row.amount),0);

  return (
    <div className="table-container" >
      {/*Harcama Kartları */}
      <div className="table-cards">
        <div className="table-card1">
          <div className="card1-content">
            <p>Toplam Harcama</p>
            <b>{totalExpense}</b>
            <div className="card1">
              <button> ↓8.5% </button>
              <p  >Geçen aya göre</p>


            </div>
          </div>
          <div className="icon-table">
            <CiWallet />

          </div>

        </div>


        <div className="table-card2" >
          <div className="table-content">
            <p>Bu Ay Bütçe</p>
            <b>₺20.000,0</b>
            <div className="ilerleme-content">
              <div className="ilerleme">
                <div className="cizgi">

                </div>

              </div>
              <span >%62.3 kullanıldı</span>
            </div>

          </div>
          <div className="icon-table2">
            <GrAnalytics />
          </div>

        </div>


        <div className="table-card3" >
          <div className="table-content">
            <p>Bu Ay Kalan</p>
            <b>₺7.549,25</b>
            <div className="card3-end">
              <button className="btn3" >15.2%</button>
              <span>Geçen aya göre</span>
            </div>
          </div>
          <div className="icon-table3">
            <CiWallet />
          </div>


        </div>




        <div className="table-card4" >
          <div className="card4-content">
            <p>En Çok Harcama</p>
            <b>₺4.250,00</b>
            <span>Alışveriş</span>
          </div>
          <div className="icon-table4">
            <MdOutlineShoppingCart />
          </div>



        </div>

      </div>




      {/*Harcama Listesi Filtreleme */}
      <div className="harcama-container">

        <div className="container-card1">
          <h4 style={{ margin: '10px 0 -15px 10px' }} >Harcama Listesi</h4>
          <div className="harcama-filtre">

            <div className="search">
              <CiSearch className="icon-search" />
              <input className="input" type="text" placeholder="Harcama Ara..." />
            </div>



            <div className="input-2">
              <div className="search-icon2">
                <div className="icon2">
                  <SlCalender />
                </div>
                <input className="input2" type="text" placeholder="Tarih Aralığı" />
              </div>
            </div>


            <div className="input3">
              <input type="text" placeholder="Tüm Kategoriler" />
            </div>


            <button className="search-btn" > <b>+</b> Yeni Harcama</button>

          </div>
        </div>
        
        <div className="container-content">
          <h4 style={{ margin: '10px 0 -15px 10px' }}  >Kategori Dağılımı</h4>
          <div className="container-card2">
         
          <div className="daire" style={{
            background: `conic-gradient(#7c4dff 0% 20%,    
        #b39ddb 20% 50%,   
        #d1c4e9 50% 60%,   
        #e0e0e0 60% 75%,
        #e37d3e 75% 85%,
        #f17ccc 85% 100%
        )`}}>
            <div className="bosluk" >

            </div>


          </div>

          <div className="color">
            <div className="dot">
              <div style={{ backgroundColor: '#b39ddb', width: '8px', height: '8px', borderRadius: '50%' }} className="color-dot"></div>
              <p>Alışveriş</p>
            </div>
            <div className="dot">
              <div style={{ backgroundColor: '#e37d3e', width: '8px', height: '8px', borderRadius: '50%' }} className="color-dot"></div>
              <p>Yeme & İçme</p>
            </div>
            <div className="dot">
              <div style={{ backgroundColor: '#d1c4e9', width: '8px', height: '8px', borderRadius: '50%' }} className="color-dot"></div>
              <p>Ulaşım</p>
            </div>
            <div className="dot">
              <div className="color-dot" style={{ backgroundColor: '#f17ccc', width: '8px', height: '8px', borderRadius: '50%' }}  >

              </div>
              <p>Faturalar</p>
            </div>
            <div className="dot">
              <div style={{ backgroundColor: '#e0e0e0', width: '8px', height: '8px', borderRadius: '50%' }} className="color-dot"></div>


              <p>Eğlence</p>
            </div>
            <div className="dot">
              <div style={{ backgroundColor: '#7c4dff', width: '8px', height: '8px', borderRadius: '50%' }} className="color-dot"></div>
              <p>Diğer</p>
            </div>

          </div>

        </div>
        </div>
      </div>

        


      


    </div>


  )
}

export default Table