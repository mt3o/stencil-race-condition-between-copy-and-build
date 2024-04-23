
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-kjuy16vwnh',
  shadow: true,
})
export class Ckjuy16vwnh {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  