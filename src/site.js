import React from 'react'
import './site.css'


class Site extends React.Component{
   render(){
       const title= this.props.site.name ;
       const currency = this.props.site.priceCurrency;
       const style={
           backgroundImage: "url('"+this.props.site.image +"')"
       };
       
        let handleclick = ()=>{
            this.props.handleClick(this.props.site)
        };
       return(
           <div className="site" onClick={handleclick}>
               <div className="site-picture" style={style}>
                
               </div>
               <div className="site-title">
                   {title}
               </div>
               <div className="currency">
                   
               </div>
           </div>
       );
   }
}
export default Site;