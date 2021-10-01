import React from "react";
import { Form, Button} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
//import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";




import BarChartBorrow from "../components/BarChartBorrow"
import useFetch from '../hooks/useFetch'
import LoadingAndError from '../components/LoadingAndError';

const schema = yup.object().shape({
  citizenid: yup.string().length(13).required(),
});



const HomePage = () => {
  const {loading,error,data} = useFetch("https://smart.rmu.ac.th/borrow/getBorrow");

  const history = useHistory();

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  

  const onSubmit = async (data) => {

    

    history.push(`detail/${data.citizenid}`);
    //console.log(data);
  };

  

  return (
    <div>
      <LoadingAndError loading={loading} error={error}/>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-6 text-center">
            ระบบตรวจสอบสถานะหนี้เงินยืม มหาวิทยาลัยราชภัฏมหาสารคาม
          </h1>
        </div>
      </div>
      <div className="container">
        {/* Example row of columns */}
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center">ระบบตรวจสอบสถานะหนี้เงินยืม</h3>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicCitizenid">
                <Form.Label>เลขบัตรประจำตัวประชาชน</Form.Label>
                <Form.Control
                  {...register("citizenid")}
                  className={`form-control ${
                    errors.citizenid ? "is-invalid" : ""
                  }`}
                />
                {errors.citizenid && (
                  <Form.Control.Feedback type="invalid">
                    {errors.citizenid.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Button variant="secondary" type="submit" size="md" block>
                <FaSearch /> ตรวจสอบสถานะหนี้เงินยืม
              </Button>
            </Form>

            <hr />

            <h3>รายงานข้อมูลเงินยืม มหาวิทยาลัยราชภัฏมหาสารคาม 5 ปีย้อนหลัง</h3>
            <BarChartBorrow chart={data} height="60%"/>
            
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default HomePage;
