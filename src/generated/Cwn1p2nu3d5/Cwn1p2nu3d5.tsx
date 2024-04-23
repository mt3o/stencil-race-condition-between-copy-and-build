
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-wn1p2nu3d5',
  shadow: true,
})
export class Cwn1p2nu3d5 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  