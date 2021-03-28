const ServicesScreen = ({ services }) => {

    let maintitle = services.maintitle;

    const serviceComponent = services.content.map((a, i) => {
        return (
            <div className={"partners__logo _" + (i + 1)} key={i}/>
        )
    })

    return (
        <div className="screen">
          <h2 className="mainpage__h2 white">{ maintitle }</h2>
          <div className="partners__group">
            
                { serviceComponent}

          </div>
        </div>
    )
}

export default ServicesScreen