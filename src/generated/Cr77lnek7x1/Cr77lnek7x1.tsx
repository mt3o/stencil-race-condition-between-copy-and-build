
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-r77lnek7x1',
  shadow: true,
})
export class Cr77lnek7x1 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  