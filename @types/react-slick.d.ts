declare module 'react-slick' {
  import * as React from 'react'
  import { Settings as OriginalSettings } from 'react-slick'

  export interface ExtendedSettings extends OriginalSettings {
    children?: React.ReactNode
  }

  export default class Slider extends React.Component<ExtendedSettings> {}
}
