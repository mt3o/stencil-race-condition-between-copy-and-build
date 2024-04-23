
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-nor5t0g9do',
  shadow: true,
})
export class Cnor5t0g9do {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  