import React,{ useState, useRef, MouseEvent, useEffect } from 'react';
import './css/browser/item/productImage.scss';

function ProductImage() {
  const imgRef = useRef();
  // 테스트 데이터
  const [mainImgPath, setMainImgPath] = useState({PATH : '/images/product_1.jpeg'});
  const [subImgPath, setSubImgPath] = useState([ {PATH : '/images/product_1.jpeg'}
                                               , {PATH : '/images/product_2.jpeg'}
                                               , {PATH : '/images/product_3.jpeg'}
                                               , {PATH : '/images/product_4.jpeg'}
                                               ] );
  const [classFlag, setClassFlag] = useState('scale(1)');
  const [blowFlag, setBlowFlag] = useState('0, 0');
  
  const mainMouseMove = (e:MouseEvent) => {
    e.preventDefault();
    setBlowFlag(((e.pageX - imgRef.current.offsetLeft) / imgRef.current.offsetWidth) * 100 + '% ' + ((e.pageY - imgRef.current.offsetTop) / imgRef.current.offsetHeight) * 100 + '%');
  } 

  return (
      <div className="view">
        <div className="mainImgBox" ref={imgRef}>
            <div className="mainImg" style={{backgroundImage:"url("+ mainImgPath.PATH +")", transformOrigin:blowFlag, transform:classFlag}} 
                onMouseOver={(e) => setClassFlag('scale(1.6)')}
                onMouseOut={(e) => setClassFlag('scale(1)')}
                onMouseMove={(e) => {
                    mainMouseMove(e);
                }}
            ></div>
        </div>
        <div className="subImgBox">
            {
                subImgPath.map((obj,i) => {
                    return (
                      <div className="subImg" style={{backgroundImage:"url("+ obj.PATH +")"}} onMouseOver={(e) => {
                          if(obj.PATH === null || mainImgPath.PATH == obj.PATH) return;
                          setMainImgPath({PATH : obj.PATH});
                      }}></div>
                    )
                })
            }
        </div>
      </div>
  );
}

export default ProductImage;
