## ---------------- Props drilling----------------------
1) here we are passing the a prop which is notrequire to FeacturesSction but that is requred to its child component which are Playtime and NewWayToConnect so that is called prop drilling 
to ovide this problem we are using the react-context 

2) consumer=> to access the context value we are using the consumer component , and to access the consumer component we have to write the <ContextObect.Consumer> callbackmethod </ContextObect.Consumer>
3) here callback method or fnction that has a prop that is value of context which we will give as argument for it.
4) exaple=>
5) 
<LanguageContext.Consumer>
    {value=>{
        const{activeLanguage, changeLanguage} = value;
        const onChangeLanguage = event=>{
            changeLanguage(event.target.value)
        }
    }}
</LanguageContext.Consumer>

6) this is done and one more buge is there that is related to Content provider for the header section 
when we select the particular option than it should to change but current it is not chaning beacuse we didn't applied that concent
