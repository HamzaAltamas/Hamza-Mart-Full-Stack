import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          
          <div key={index} className='md:w-[50%] lg:w-[33%] mt-[20px]'>
             <ProductCard
              image="../src/assets/images/product1.png"   
              badge={false}  
            
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {

  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
          <div className='md:flex md:flex-wrap  md:justify-between'>
              
          <Items currentItems={currentItems} />
          </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
          previousClassName="hidden"
       
        nextClassName="hidden"
      breakClassName="w-[45px] h-[45px] rounded-full flex justify-center  items-center shadow-lg font-nunito duration-500 hover:bg-orange hover:text-white"
        activeClassName="text-white bg-orange  "
          pageClassName="w-[45px] h-[45px] rounded-full flex justify-center  items-center shadow-lg font-nunito duration-500 hover:bg-orange hover:text-white"
        pageLinkClassName="w-full h-full flex justify-center items-center text white"    
            containerClassName="flex flex-wrap justify-center gap-x-[15px] gap-y-[15px] md:gap-y-[0] mt-7"
      />
      <p className='mt-[25px] text-center  text-ashText font-nunito'>Products from {itemOffset} to {itemOffset + itemsPerPage} of { items.length}</p>
    </>
  );
}

export default Pagination