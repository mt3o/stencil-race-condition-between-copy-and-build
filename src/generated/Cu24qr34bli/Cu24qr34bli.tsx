
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-u24qr34bli',
  shadow: true,
})
export class Cu24qr34bli {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  