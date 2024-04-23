
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-dw5fah0dak',
  shadow: true,
})
export class Cdw5fah0dak {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  