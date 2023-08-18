import Wrapper from "../assets/wrappers/PageBtnContainer"
import { useAppContext } from "../context/appContext"
import {HiChevronDoubleLeft, HiChevronDoubleRight} from 'react-icons/hi'
const PageBtnContainer = () => {
    const {numOfPages, page, changePage} = useAppContext();

    const nextPage = () => {
        console.log('Next page');
    }
    const prevPage = () => {
        console.log('prev page');
    }

    const pages = Array.from({length: numOfPages}, (_, index)=> {
        return index +1;
    })
    console.log(numOfPages);
  return (
    <Wrapper>
        <button className="prev-btn" onClick={prevPage}>
            <HiChevronDoubleLeft/>
            prev
        </button>
        <div className="btn-container">
           {
                pages.map((pageNumber)=> {
                    return <button type="button" className={pageNumber === page? 'pageBtn active' : 'pageBtn'} key={pageNumber} onClick={()=>changePage(pageNumber)}>{pageNumber}</button>
                })
           }
        </div>
        <button className="next-btn" onClick={nextPage}>
            next
            <HiChevronDoubleRight/>
        </button>
    </Wrapper>
  )
}

export default PageBtnContainer