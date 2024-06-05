import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { settingsActions } from '../../store/settingsSlice'

const Options = () => {

  const [rechercheArticle, setRechercheArticle]=useState(true)
  const [codePromoSettings, setCodePromoSettings]=useState({
    byNum:true,
    byScan:true
  })
  const [fidelitySettings, setFidelitySettings]=useState({
    byNum:true,
    byScan:true,
    byPhone:true
  })

  const dispatch=useDispatch()
  const store=useSelector(store=>store)
  console.log(store)

  useEffect(_=>{
    const optionsData={rechercheArticle,fidelitySettings,codePromoSettings}
    dispatch(settingsActions.changeOptions(optionsData))

  },[rechercheArticle, fidelitySettings,codePromoSettings])

  useEffect(()=>{
    console.log(document.querySelectorAll("input[type='checkbox'").forEach(input=>input.checked=true))
  },[])
  return (
    <div
      className="page"
    >
        <ul className="admin-nav-list">
        <Link to="/admin/general" >Général</Link>
        <Link to="/admin/design"  >Design</Link>
        <Link  to="/admin/imprimente" >Imprimente</Link>
        <Link to="/admin/options" style={{
            color: "white",
            borderBottom: "1px solid blue",
            background: "blue",
          }}>
          Options
        </Link>
        </ul>
    <div style={{
        paddingBlock: "4rem",
        display: "flex",
        gap: "5rem",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
        <div className="column-card">
        <div className="column-card__title">Fidélité</div>
        <div className="column-card__option">
          <span>Authentication par scan du carte fidélité</span>
          <input onChange={e =>{
            setFidelitySettings({...fidelitySettings,byScan:e.target.checked?true:false})
          }} type="checkbox" name="" id="" />
        </div>
        <div className="column-card__option">
          <span>Authentication par Numéro du carte fidélité</span>
          <input onChange={e =>{
            setFidelitySettings({...fidelitySettings,byNum:e.target.checked?true:false})
          }} type="checkbox" name="" id="" />
        </div>
        <div className="column-card__option">
          <span>Authentication par Numéro du telephone</span>
          <input onChange={e =>{
            setFidelitySettings({...fidelitySettings,byPhone:e.target.checked?true:false})
          }} type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="column-card">
        <div className="column-card__title">Code promo</div>
        <div className="column-card__option">
          <span>Authentication par saisir Numéro du carte</span>
          <input onChange={e =>{
            setCodePromoSettings({...codePromoSettings, byNum:e.target.checked?true:false})
          }} type="checkbox" name="" id="" />
        </div>
        <div className="column-card__option">
          <span>Authentication par scanner la carte</span>
          <input onChange={e =>{
            setCodePromoSettings({...codePromoSettings, byScan:e.target.checked?true:false})
          }} type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="column-card">
        <div className="column-card__title">Code Postal</div>
        <div className="column-card__option">
          <span>Saisir du code obligatoire</span>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="column-card__option">
          <span>Controle du saisir sur le code</span>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="column-card">
        <div className="column-card__title">Recherche artile</div>
        <div className="column-card__option">
          <span>Recherche article</span>
          <input onChange={e =>{
            setRechercheArticle(e.target.checked)
          }} type="checkbox" name="" id="" />
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Options