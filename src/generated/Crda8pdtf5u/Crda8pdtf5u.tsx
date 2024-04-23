
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-rda8pdtf5u',
  shadow: true,
})
export class Crda8pdtf5u {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  