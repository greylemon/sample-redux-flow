import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFactoryRESTResponseValues, selectFactoryRESTIsCallInProgress } from '../redux/common/REST/selectors'
import { selectHelloWorldStore } from '../redux/HelloWorldStore/selectors'
import { getHelloWorldRequest } from '../redux/thunk/helloWorld'

const Loading = () => <div>Loading Request</div>

const HelloWorldContent = ({ value }) => (
  <div>
    {value.value}
  </div>
)

const HelloWorld = () => {
  const dispatch = useDispatch()

  const { values, isCallInProgress } = useSelector(
    (state) => (
      {
        values: selectFactoryRESTResponseValues(selectHelloWorldStore)(state),
        isCallInProgress: selectFactoryRESTIsCallInProgress(selectHelloWorldStore)(state)
      }
    )
  )

  useEffect(
    () => {
      dispatch(getHelloWorldRequest())
    },
    []
  )

  return (
    isCallInProgress && !values.length
      ? <Loading/>
      : <HelloWorldContent value={values}/>
  ) 
}

export default HelloWorld