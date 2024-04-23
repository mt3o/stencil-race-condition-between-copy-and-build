
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-irlw1y0vnn',
  shadow: true,
})
export class Cirlw1y0vnn {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  