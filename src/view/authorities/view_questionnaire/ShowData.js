import React, { useRef, useState, useEffect } from 'react';
import { TextSelect } from '../../../components/TextSelect';
import PageSize from '../../../data/pageSize.json';
import Pagination from 'react-js-pagination';
import DateTh from '../../../components/DateTh';

// import { useReactToPrint } from 'react-to-print';

import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ShowData({ data, pagin, changePage, changePageSize }) {
  const [dataQ, setDataQ] = useState(null);
  const [viewQ, setViewQ] = useState(null); // เรียกใช้ข้อมูลจาก หน้า db มาโชว์
  const [counts, setCounts] = useState({});

  //ตัวกำหนดเส้นทาง
  const navigate = useNavigate();
  const pageStyle = `
  @page {
    size: 4in 4in
  }`;

  const message ="ระบบใช้งานได้สะดวกดี , ระบบใช้งานได้สะดวกดีมากๆ , ระบบใช้งานได้สะดวกพอใช้ , ระบบควรปรับปรุง , ระบบควรปรับปรุงอย่างยิ่ง";

  const textCount = {
    "ระบบใช้งานได้สะดวกดี":0,
    "ระบบใช้งานได้สะดวกดีมากๆ":0,
    "ระบบใช้งานได้สะดวกพอใช้":0,
    "ระบบควรปรับปรุง":0,
    "ระบบควรปรับปรุงอย่างยิ่ง":0
  };

  const texts = message.split(",");
    
       texts.forEach((test) => {
        textCount[test] += 1;
       });

       console.log(`ระบบใช้งานได้สะดวกดี:${textCount["ระบบใช้งานได้สะดวกดี"]}`);
       console.log(`ระบบใช้งานได้สะดวกดีมากๆ:${textCount["ระบบใช้งานได้สะดวกดีมากๆ"]}`);
       console.log(`ระบบใช้งานได้สะดวกพอใช้:${textCount["ระบบใช้งานได้สะดวกพอใช้"]}`);
       console.log(`ระบบควรปรับปรุง:${textCount["ระบบควรปรับปรุง"]}`);
       console.log(`ระบบควรปรับปรุงอย่างยิ่ง:${textCount["ระบบควรปรับปรุงอย่างยิ่ง"]}`);

  useEffect(() => {
    axios
      // เรียกใช้ API เพื่อดึงข้อมูลจากฐานข้อมูล
      .get("https://json-six-lac.vercel.app/questionaire")
      .then((res) => {
        console.log(res);
        setViewQ(res.data);
        getCounts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const getCounts = data => {
    // นับจำนวนรายการในแต่ละคอลัมน์
    const columnCounts = {};

    data.forEach(item => {
      Object.keys(item).forEach(key => {
        if (columnCounts[key]) {
          columnCounts[key] += 1;
        } else {
          columnCounts[key] = 1;
        }
      });
    });

    setCounts(columnCounts);
  };

  
  


  //ส่วนของโครงสร้างแดชบอด


  //   const print = useReactToPrint({
  //     content: () => componentRef.current,
  //     documentTitle: "Q_Online",
  //     pageStyle: pageStyle,
  //   });


  return (
    <div className="text-center">
      <div className="card text-white bg-success mb-3">
        <div className='card-body'>
          {/* <h2>Dashboard</h2> */}
          <div style={{ textAlign: 'center' }}>
            {/* <div className='card'> */}
              <h3>การประเมินรวม </h3>
              
              {/* {Object.keys(counts).map(key => (
                <p key={key} >
                   
                  {key}: {counts[key]}
                 
                
                  
                </p>
              ))} */}
            {/* </div> */}

          </div>

          {/* <button onClick={fetchData}>Refresh</button> */}
        </div>
        {/* <div className="w-pagesize">
          <TextSelect
              id="ลำดับของผู้ใช้"
              name="ประเมิน"
              options={PageSize}
              value={PageSize.filter((a) => a.id === pagin.pageSize)}
              // onChange={(item) => {
              //   changePageSize(item.id);
              // }}
              getOptionLabel={(z) => z.label}
              getOptionValue={(x) => x.id}
            />

        </div> */}

      </div>

      <div className="overflow-auto">
        <table className="table">
          <thead>
            <tr className="table-success">
              <th scope="col" style={{ width: '10%' }}>
                ลำดับ
              </th>
              {/* <th scope="col" style={{ width: '10%' }}>
                จำนวนดาวการประเมิน
              </th> */}
              <th scope="col" style={{ width: '15%' }}>
                ประเมิน
              </th>
              <th scope="col" style={{ width: '20%' }}>
                รายละเอียดเพิ่มเติม
              </th>


            </tr>
          </thead>
          <tbody>
            {viewQ &&
              viewQ.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    {/* <td><img className="img-hpt" src={item.assets} /></td> */}
                    <td>{item.questionaire_name}</td>
                    <td>{item.suggestion}</td>
                  </tr>
                );
              })}
          </tbody>
          <tbody>
            {data.length === 0 ? (
              <tr>
                {/* <td colSpan={5}>
                  <div className="text-center text-danger">-- ไม่พบข้อมูล --</div>
                </td> */}
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={item.id}>
                  <td>{(pagin.currentPage - 1) * pagin.pageSize + (index + 1)}</td>
                  <td>{item.code}</td>
                  <td>{item.fullname_doctor}</td>
                  <td>{item.treatment_type_name}</td>
                  <td>
                    <DateTh date={item.created_date} />
                  </td>
                  <td>
                    <DateTh date={item.open_date} />
                  </td>
                  <td>{item.number}</td>

                  <td>

                    <button type="button" className='btn btn-info' onClick={() => {
                      //print();
                      setDataQ(item);
                    }}
                    >

                      <i className="fa-solid fa-print text-white"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
        <div>จำนวน {pagin.totalRow} รายการ</div>
        <div>
          <Pagination
            activePage={pagin.currentPage}
            itemsCountPerPage={pagin.pageSize}
            totalItemsCount={pagin.totalRow}
            pageRangeDisplayed={pagin.totalPage}
            onChange={(page) => {
              changePage(page);
            }}
          />
        </div>
      </div>

    </div>
  );
}

export default ShowData;