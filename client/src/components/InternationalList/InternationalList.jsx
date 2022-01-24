import React, { useState } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import Dictaphone from './Dictaphone';

export default () => {
  const [showFirstWidget, setShowFirstWidget] = useState(true)
  const toggleShowFirstWidget = () => setShowFirstWidget(!showFirstWidget)

  const listenContinuously = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-GB'
  })
  const listenContinuouslyInChinese = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'zh-CN'
  })
  const listenOnce = () => SpeechRecognition.startListening({ continuous: false })

  return (
    <div>
      {/* {showFirstWidget && <DictaphoneWidgetA />} */}
      <Dictaphone />
      <button onClick={listenOnce}>Listen once</button>
      <button onClick={listenContinuously}>Listen continuously</button>
      <button onClick={listenContinuouslyInChinese}>Listen continuously (Chinese)</button>
      <button onClick={toggleShowFirstWidget}>Toggle first widget</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
    </div>
  )
}
